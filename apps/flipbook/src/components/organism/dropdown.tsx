
import { useEffect } from 'react';
import { StyleMenu } from '../../styles/styleMenu';

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
                let i = 0;
                let pageText2 = document.createElement('ul');
                t.slug.map((s) => {
                    let pageText3 = document.createElement('li');
                    let pageText4 = document.createElement('a');
                    pageText4.innerHTML = s[0].toUpperCase() + s.substring(1).replaceAll('_', ' ');
                    pageText4.className = s;
                    pageText4.id = i.toString();
                    i++
                    pageText4.addEventListener('click', (e:any)=>{
                        const loc = document.getElementById('opis');
                        loc!.innerHTML = t.cleaned[e.target.id];
                        loc!.className = 'flex flex-row bg-pb p-2 mb-10';
                        let loctab = document.getElementById('spec');
                        loctab!.innerHTML = ""
                        t.changed.map(
                            (c: {
                                name: string;
                                equation: string;
                                engineering: { partTime: boolean; stationary: boolean };
                                master: {partTime: boolean; stationary: boolean};
                                specialities: Array<{ name: string }>;
                            }) => {
                                if (
                                    c.name
                                        .toLowerCase()
                                        .replaceAll('??', 'z')
                                        .replaceAll('??', 'o')
                                        .replaceAll('??', 'a')
                                        .replaceAll('??', 'e')
                                        .replaceAll('??', 'z')
                                        .replaceAll('??', 's')
                                        .replaceAll('??', 'l') === s.toLowerCase().replaceAll('_', ' ')
                                ) {
                                    document.getElementById('nazwa')!.innerHTML = c.name;
                                    document.getElementById('nazwa1')!.innerHTML = c.name;
                                    document.getElementById('wzor')!.innerHTML = c.equation;
                                    document.getElementById('wynik')!.innerHTML = '0';
                                    c.specialities.forEach((c) => {
                                        let spec = document.createElement('div');
                                        spec!.innerHTML = '&#x27A4' + ' ' + c.name[0].toUpperCase() + c.name.substring(1);
                                        loctab!.appendChild(spec);
                                    });
                                    const check = '&#x2713';
                                    const notcheck = '&#x2715';
                                    if(c.master.stationary) {
                                        document.getElementById('master-stationary')!.innerHTML = check;
                                    } else {
                                        document.getElementById('master-stationary')!.innerHTML = notcheck;
                                    }
                                    if (c.master.partTime) {
                                        document.getElementById('master-partTime')!.innerHTML = check;
                                    } else {
                                        document.getElementById('master-partTime')!.innerHTML = notcheck;
                                    }
                                    if (c.engineering.stationary) {
                                        document.getElementById('engineering-stationary')!.innerHTML = check;
                                    } else {
                                        document.getElementById('engineering-stationary')!.innerHTML = notcheck;
                                    }
                                    if (c.engineering.partTime) {
                                        document.getElementById('engineering-partTime')!.innerHTML = check;
                                    } else {
                                        document.getElementById('engineering-partTime')!.innerHTML = notcheck;
                                    }
                                    document.getElementById('table')!.className = '';
                                    document.getElementById('specwrap')!.className = 'flex flex-col';
                                }
                                t.dir.map((m) => {
                                    let hidden = document.getElementById('R');
                                    hidden!.style.border = 'none';
                                    hidden!.style.borderBottom = '2px solid #00610b';
                                    if (m === 'architektury') {
                                        hidden!.className = '';
                                    } else {
                                        hidden!.className = 'hidden';
                                    }
                                });
                            },
                        );
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
        <StyleMenu>
            <ul className="dropdown">
                <li>
                    <a href="#">Lista kierunk??w</a>
                    <ul className="kierunki">
                    </ul>
                </li>
            </ul>
        </StyleMenu>
    );
};
