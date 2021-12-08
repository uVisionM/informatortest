import { EDQUOT } from 'constants';
import { PageFlip } from 'page-flip';
import { useEffect, useState } from 'react';
import { Wrapper } from './styles';

interface IFlipBook {
    pages: Array<{
        clean: string;
        changedToMatter: {
            [key: string]: any;
        };
    }>;
}


export const FlipBook: React.FC<IFlipBook> = ({ pages }) => {

    useEffect(() => {
        
        const pageFlip = new PageFlip(document.getElementById('demoBookExample')!, {
            width: 800,
            height: 800,
            showCover: true,
            drawShadow: true,
            flippingTime: 800,
            autoSize: false,
        });
        pageFlip.loadFromHTML(document.querySelectorAll('.page'));

        pageFlip.on("flip", (e)=>{

            document.getElementById('flippage-1')!.innerHTML = pages[Number(e.data)].clean;
            
        })
    });

    return (
        <Wrapper>
            <div className="container">
                <div id="demoBookExample">
                    <div className="page page-cover page-cover-top" data-density="hard">
                        <div className="page-content">
                            <h2>Informator Politechniki Białostockiej</h2>
                        </div>
                    </div>
                    <div className="page">
                        <div className="page-content">
                            <div className="page-text" id="flippage-1"></div>
                        </div>
                    </div>
                    <div className="page">
                        <div className="page-content">
                            <div
                                className="page-text" id="flippage-2"
                            ></div>
                        </div>
                    </div>
                   
                    <div className="page page-cover page-cover-bottom" data-density="hard">
                        <div className="page-content">
                            <h2>THE END</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
