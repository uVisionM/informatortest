import { useEffect } from "react"

interface PFlipBook {
    graduate: Array<{
        changedToMatter: {
            [key: string]: any;
        };
        clean: string;
    } | null>;
}
export const GraduateSlider : React.FC<PFlipBook> = ({ graduate }) => {
    graduate.map((g)=>{console.log(g?.changedToMatter.image)})
    useEffect(() => {
        graduate.map((g)=>{
        const loc = document.getElementById('zdjecia')
        const img = document.createElement('img')
        img.src = g?.changedToMatter.image
        loc!.appendChild(img)
    })
    })
    return (
        <div className="w-80" id="zdjecia"></div>
    )
}
