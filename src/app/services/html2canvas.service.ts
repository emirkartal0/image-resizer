import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { mimeTypes } from '../shared/types';

@Injectable({
    providedIn: 'root'
})
export class Html2canvasService {

    constructor() { }

    downloadImage(
        element: HTMLElement, 
        filename: string = 'image',
        mimeType: string = mimeTypes.png,
        canvasWidth?: number,
        canvasHeight?: number,
        xOffSet: number = 0,
        yOffSet: number = 0,
    ) {
        html2canvas(element, { scale:1, width: canvasWidth, height: canvasHeight, x: xOffSet, y: yOffSet }).then(canvas => {
            const link = document.createElement('a');
            link.download = filename;
            link.href = canvas.toDataURL(mimeType);
            link.click();
        });
    }

}
