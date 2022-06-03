import React, { useEffect, useState } from 'react'

type ProgressBar = {
    isFinish: any,
    height?: number,
    invervalSpeed?: number,
    barWidth?: number,
    color?: string
    redirectString?: string,
    isPopupActive?: boolean
}

export default function ProgressBar({ isFinish, height = 3, color = "#000000", invervalSpeed = 15, redirectString }: ProgressBar) {
    const [barWidth, setBarWidth] = useState(-5)

    useEffect(() => {
        let invervalSpeed = 15
        let progress = -5;
        let incrementSpeed = 0.5;
        let progressInterval = setInterval(async function () {
            progress += incrementSpeed;
            setBarWidth(progress);
            if (progress >= 100) {
                clearInterval(progressInterval);
                if (redirectString) {
                    setTimeout(() => window.location.replace(`${redirectString}`), 500);
                };
                isFinish(true);
            }
        }, invervalSpeed);
    }, [])

    return (
        <div id='bar' className={`bg-green-600 h-${height} fixed bottom-0 left-0`} style={{ width: `${barWidth}%` }}></div>
    )
}