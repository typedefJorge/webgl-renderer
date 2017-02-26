import { IMouseHandler } from "./mouseHandler"

export class BasicCanvasMouseHandler implements IMouseHandler
{
    mouseIsDown: boolean;
    mouseDownHandler: (event: MouseEvent) => void;
    mouseMoveHandler: (event: MouseEvent) => void;
    mouseUpHandler: (event: MouseEvent) => void;
    callbackMethod: (event: MouseEvent) => void;

    constructor(callbackMethod: (event: MouseEvent) => void)
    {
        this.mouseIsDown = false;
        this.callbackMethod = callbackMethod;

        this.mouseDownHandler = (event: MouseEvent) : void =>
        {
            this.mouseIsDown = true;
            this.callbackMethod(event);
        }

        this.mouseMoveHandler = (event: MouseEvent): void =>
        {
            if(this.mouseIsDown)
            {
                this.callbackMethod(event);
            }
        }

        this.mouseUpHandler = (event: MouseEvent): void => 
        {
            this.mouseIsDown = false;
        }
    }
}