import styled from "@emotion/styled";
import { useEffect } from "react";
import { DropdownMenu } from "./dropdown";
import { Cos } from "./styles/styleMenu";

const Parser = (q: string, subjects: Array<{ symbol: string; result: number }>) => {
    let s = q;

    subjects.forEach((subject) => {
        s = s.replace(subject.symbol, subject.result.toString());
    });
    return eval(s);
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
`;
const WrapperInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 15%;
    .hidden{
        display: none;
    }
`
const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40%;
`;
const Input = styled.input`
    border: none;
    border-bottom: 2px solid #00610b;
`;
const Button = styled.button`
    background-color: #00610b;
    height: 3rem;
    margin-top: 20px;
    margin-bottom: 40px;
    border-radius: 5rem;
    border: 2px solid;
    border-color: black;
    :hover {
        opacity: 0.5;
    }
`;

interface PFlipBook {
    test: Array<{
        slug: string[];
        dir: string[];
        changed: {
            [key: string]: any;
        };
        cleaned: string[];
    }>;
}

export const HParser: React.FC<PFlipBook> = ({ test }) => {

    let inSubjects = [
        { symbol: 'FR', result: 0 }, //Fizyka roz. (input)
        { symbol: 'CR', result: 0 }, //Chemia roz. (input)
        { symbol: 'IR', result: 0 }, //Informatyka roz. (input)
        { symbol: 'BR', result: 0 }, //Biologia roz. (input)
    ];

    let array = [
        { symbol: 'MP', result: 0 }, //Matematyka podstawowa (input)
        { symbol: 'MR', result: 0 }, //Matematyka rozszerzona (input)
        { symbol: 'OP', result: 0 }, //Język obcy nowożytny podst. (input)
        { symbol: 'OR', result: 0 }, //Język obcy nowożytny roz. (input)
    ];

    useEffect(() => {
        const btn = document.getElementById('button');
        btn!.addEventListener('click', () => {
            const wzor = document.getElementById('wzor')!.innerHTML;
            console.log(wzor);
            for (let i = 0; i < array.length; i++) {
                const val = (document.getElementById(array[i].symbol) as HTMLInputElement)?.value;
                array[i].result = Number(val);
            }
            for (let i = 0; i < inSubjects.length; i++) {
                const val = (document.getElementById(inSubjects[i].symbol) as HTMLInputElement)?.value;
                inSubjects[i].result = Number(val);
            }
            const przedmiot = { fizyka: 1.75, cheminf: 1.5, biol: 1.25 };
            inSubjects.sort((a, b) => b.result - a.result);
            if (inSubjects[0].symbol === 'FR') {
                array.push({ symbol: 'WR', result: przedmiot.fizyka });
                array.push({ symbol: 'FR', result: inSubjects[0].result });
            } else if (inSubjects[0].symbol === 'CR' || inSubjects[0].symbol === 'IR') {
                array.push({ symbol: 'WR', result: przedmiot.cheminf });
                array.push({ symbol: 'FR', result: inSubjects[0].result });
            } else if (inSubjects[0].symbol === 'BR') {
                array.push({ symbol: 'WR', result: przedmiot.biol });
                array.push({ symbol: 'FR', result: inSubjects[0].result });
            } else return null;
            const val = (document.getElementById('R') as HTMLInputElement)?.value;
            array.push({ symbol: 'R', result: Number(val) });
            const ans = Parser(wzor, array); //suma punktów (output)
            console.log(ans);
            document.getElementById('wynik')!.innerHTML = ans;
            array.pop();
            array.pop();
            array.pop();
        });
    
    });

    return (
        <Wrapper>
            <Cos>
                <DropdownMenu test={test}></DropdownMenu>
            </Cos>
            <WrapperInput>
                <Input id="MP" placeholder="Wynik z podstawowej matematyki"></Input>
                <Input id="MR" placeholder="Wynik z rozszerzonej matematyki"></Input>
                <Input id="OP" placeholder="Wynik z nowożytny podstawowy"></Input>
                <Input id="OR" placeholder="Wynik z nowożytny rozszerzony"></Input>
                <Input id="FR" placeholder="Wynik z rozszerzonej fizyki"></Input>
                <Input id="CR" placeholder="Wynik z rozszerzonej chemii"></Input>
                <Input id="IR" placeholder="Wynik z rozszerzonej informatyki"></Input>
                <Input id="BR" placeholder="Wynik z rozszerzonej biologii"></Input>
                <Input id="R" className="hidden" placeholder="Wynik z egzaminu z rysunku"></Input>
                <Button id="button">Przelicz punkty</Button>
            </WrapperInput>

            <WrapperText>
                <div className="flex flex-row">
                    Wybrany kierunek:<div className="ml-1" id="nazwa"></div>
                </div>
                <div className="flex flex-row">
                    Wzór na wybrany kierunek: <div className="ml-1" id="wzor"></div>
                </div>
                <div className="flex flex-row">
                    Ilość uzyskanych punktów:<div className="ml-1" id="wynik"></div>
                </div>
            </WrapperText>
            <div id="kierunki"></div>
        </Wrapper>
    );
    
};
