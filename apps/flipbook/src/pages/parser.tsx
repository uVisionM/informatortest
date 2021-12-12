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
`;
const WrapperInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 15%;
`
const Input = styled.input`

`
const Button = styled.button`

`

interface PFlipBook {
    test: Array<{
        slug: any[];
        dir: any[];
        changed: any[];
        cleaned: any[]
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
            array.push({ symbol: 'R', result: Number(val)})
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
            <WrapperInput>
                <Input id="MP" placeholder="Wynik z podstawowej matematyki"></Input>
                <Input id="MR" placeholder="Wynik z rozszerzonej matematyki"></Input>
                <Input id="OP" placeholder="Wynik z nowożytny podstawowy"></Input>
                <Input id="OR" placeholder="Wynik z nowożytny rozszerzony"></Input>
                <Input id="FR" placeholder="Wynik z rozszerzonej fizyki"></Input>
                <Input id="CR" placeholder="Wynik z rozszerzonej chemii"></Input>
                <Input id="IR" placeholder="Wynik z rozszerzonej informatyki"></Input>
                <Input id="BR" placeholder="Wynik z rozszerzonej biologii"></Input>
                <Input id="R" placeholder="Wynik z egzaminu z rysunku"></Input>
                <Button id="button">Przelicz punkty</Button>
            </WrapperInput>
            <div id="wzor"></div>
            <div id="wynik"></div>
            <div id="kierunki"></div>

            <Cos>
                <DropdownMenu test={test}></DropdownMenu>
            </Cos>
        </Wrapper>
    );
    
};
