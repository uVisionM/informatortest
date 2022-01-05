import { PageFlip } from 'page-flip';
import { useEffect } from 'react';
import { Wrapper, Btn, LogoPB, Godlo } from '../../styles/styleBook';
import { MarkdownContentPages }from '../../styles/styleMD';
interface IFlipBook {
    pages: Array<
        | {
              clean: string;
              changedToMatter: {
                  [key: string]: any;
              };
          }
        | any
    >;
    test: Array<{
        slug: string[];
        dir: string[];
        changed: {
            [key: string]: any;
        };
        cleaned: string[];
    }>;
    graduate: Array<{
        changedToMatter: {
            [key: string]: any;
        };
        clean: string;
    } | null>;
    science: Array<{
        changed: {
            [key: string]: any;
        };
        cleaned: string[];
    }>;
}
enum SizeType {
    /** Dimensions are fixed */
    FIXED = "fixed",
    /** Dimensions are calculated based on the parent element */
    STRETCH = "stretch"
}
export const FlipBook: React.FC<IFlipBook> = ({ pages, test, graduate, science }) => {
    useEffect(() => {
        const pageFlip = new PageFlip(document.getElementById('flipbook-container')!, {
            width: 800,
            height: 800,
            showCover: true,
            drawShadow: true,
            flippingTime: 800,
            autoSize: true,
            startZIndex: 0,
            swipeDistance: 15,
            mobileScrollSupport: true,
            size: SizeType.STRETCH,
            minWidth: 280,
            maxWidth: 800,
            minHeight: 300,
            maxHeight: 800,
            disableFlipByClick: true,
          
        });
        pages.sort((a, b) => a?.changedToMatter.pageNumber - b?.changedToMatter.pageNumber);
        let loc = document.getElementById('page-storage')
        for (let i = 0; i < pages.length; i++)
        {
            if(i>=0)
            {
            let page = document.createElement('div');
            let pageContent = document.createElement('div');
            let pageText = document.createElement('div');
            page.className = 'page';
            pageContent.className = 'flex flex-col ml-4 w-[95%]';
            pageText.innerHTML = pages[i]?.clean;
            pageContent.appendChild(pageText);
            page.appendChild(pageContent);
            loc!.appendChild(page);
            }
        }
        let page = document.createElement('div');
        let pageContent = document.createElement('div');
        let pageText = document.createElement('div');
        page.className = 'page';
        pageContent.className = 'bg-pb w-full h-full flex flex-col py-[49%]';
        pageText.className = 'text-white text-4xl text-center';
        pageText.innerHTML = "Nasi Absolwenci!"
        pageContent.appendChild(pageText);
        page.appendChild(pageContent);
        loc!.appendChild(page);
        graduate.map((g)=>{
            let page = document.createElement('div');
            let pageContent = document.createElement('div');
            let pageText = document.createElement('div');
            let pageImg = document.createElement('img');
            page.className = 'page';
            pageContent.className = 'flex flex-col ml-4 w-[95%]';
            pageText.className = 'mt-4'
            pageText.innerHTML = g!.clean
            pageImg.className = 'w-96 h-auto mx-auto mt-4';
            pageImg.src = g!.changedToMatter.image;
            pageContent.appendChild(pageImg)
            pageContent.appendChild(pageText);
            page.appendChild(pageContent);
            loc!.appendChild(page);
        })
        page = document.createElement('div');
        pageContent = document.createElement('div');
        pageText = document.createElement('div');
        page.className = 'page';
        pageContent.className = 'bg-pb w-full h-full flex flex-col py-[49%]';
        pageText.className = 'text-white text-4xl text-center';
        pageText.innerHTML = "Koła naukowe na naszej uczelni!"
        pageContent.appendChild(pageText);
        page.appendChild(pageContent);
        loc!.appendChild(page);
        science.map((g)=>{
            for (let i = 0; i < g.cleaned.length; i++)
            {
                let page = document.createElement('div');
                let pageContent = document.createElement('div');
                let pageText = document.createElement('div');
                let pageTextHeader = document.createElement('h1');
                page.className = 'page';
                pageContent.className = 'flex flex-col ml-4 w-[95%]';
                pageTextHeader.className = 'flex justify-center';
                pageTextHeader.innerHTML = g.changed[i].name;
                pageText.innerHTML = g.cleaned[i]
                pageContent.appendChild(pageTextHeader);
                pageContent.appendChild(pageText);
                page.appendChild(pageContent);
                loc!.appendChild(page);
            }
        })
        pageFlip.on('init', () =>{
            loc = document.getElementById('page-total');
            loc!.innerHTML = pageFlip.getPageCount().toString();   
        })
        pageFlip.on('changeState', () => {
            loc = document.getElementById('page-current');
            loc!.innerHTML = (pageFlip.getCurrentPageIndex()+1).toString();
            for (let i = 0; i < pages.length; i++)
            { 
                if (pages[i].changedToMatter.id === "equation")
                {
                    console.log("dupa")
                }
                }});
        let prev = document.getElementById('prev');
        prev?.addEventListener('click', () => {
            pageFlip.turnToPrevPage()
            loc = document.getElementById('page-current');
            loc!.innerHTML = (pageFlip.getCurrentPageIndex() + 1).toString();
        })
        let next = document.getElementById('next');
        next?.addEventListener('click', () => {
            if (pageFlip.getCurrentPageIndex() < pageFlip.getPageCount() - 2) {
                pageFlip.turnToNextPage();
            }
            loc = document.getElementById('page-current');
            loc!.innerHTML = (pageFlip.getCurrentPageIndex() + 1).toString();
        })
        pageFlip.loadFromHTML(document.querySelectorAll('.page')); 
    });
    const logo = 'https://pb.edu.pl/wp-content/themes/pb/assets/img/logo-pb-w.png';
    const godlo = 'https://pb.edu.pl/wp-content/themes/pb/assets/img/godlo.png';
    return (
        <Wrapper>
            <div className="stop-scrolling max-w-full">
                <MarkdownContentPages>
                    <div id="flipbook-container">
                        <div className="page page-cover" data-density="hard">
                            <h1 className="flex flex-row">
                                <Godlo src={godlo} />
                                <div className="border-l-2 h-24 mt-[39%]"></div>
                                <LogoPB src={logo} />
                            </h1>
                        </div>

                        <div id="page-storage"></div>
                        <div className="page page-cover page-cover-bottom" data-density="hard">
                            <div className="page-content">
                                <h1>THE END</h1>
                            </div>
                        </div>
                    </div>
                </MarkdownContentPages>
                <div className="flex flex-row " id="page-counter">
                    <Btn className="mr-4" id="prev">
                        Wstecz
                    </Btn>
                    <div className="flex flex-row gap-1 mt-6">
                        Strona <div id="page-current">1</div> z <div id="page-total">-</div>
                    </div>
                    <Btn className="ml-4" id="next">
                        Naprzód
                    </Btn>
                </div>
            </div>
        </Wrapper>
    );
};
