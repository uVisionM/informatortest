
import { useEffect } from 'react';
import { Cos } from './styles/styleMenu';

interface PFlipBook {
    test: Array<{
        slug: any[];
        dir: any[];
        changed: any[];
        cleaned: any[];
    }>;
}
export const DropdownMenu: React.FC<PFlipBook> = ({ test }) => {
    useEffect(() => {
        
        let prev = '';
        test.map((t) => {
            t.dir.map((m) => {
                let pageText = document.createElement('li');
                if (prev !== m) {
                    let pageText1 = document.createElement('a');
                    pageText1.innerHTML = m[0].toUpperCase() + m.substring(1).replaceAll('_', ' ');
                    pageText.className = m;
                    pageText.appendChild(pageText1);
                    prev = m;
                }
                let pageText2 = document.createElement('ul');
                t.slug.map((s) => {
                    let pageText3 = document.createElement('li');
                    let pageText4 = document.createElement('a');
                    pageText4.innerHTML = s[0].toUpperCase() + s.substring(1).replaceAll('_', ' ');
                    pageText4.className = s;
                    pageText4.addEventListener('click', ()=>{
                        alert('Wybrales wzor na kierunek ' + s.replaceAll('_', ' '));
                        t.changed.map((c)=>{
                            if(c.name === s[0].toUpperCase() + s.substring(1).replaceAll('_', ' '))
                            {
                                const ans = c.equation;
                                document.getElementById('wzor')!.innerHTML = ans;
                            }
                        })
                    })
                    pageText3.appendChild(pageText4);
                    pageText2.appendChild(pageText3);
                });
                let loc = document.querySelector('.kierunki');
                loc!.appendChild(pageText);
                loc = document.querySelector('.' + m);
                loc!.appendChild(pageText2);
                
            });
           
        
        });
    });

    return (
        <Cos>
            <ul className="dropdown">
                <li>
                    <a href="#">Lista kierunków</a>
                    <ul className="kierunki">
                    
                    </ul>
                </li>
            </ul>
        </Cos>
    );
};
