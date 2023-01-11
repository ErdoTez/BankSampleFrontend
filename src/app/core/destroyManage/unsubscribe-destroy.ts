import { Component, OnDestroy } from "@angular/core";
import { SubSink } from "./subSink";

@Component({
    template : ''
})

export class UnsubscribeDestroy implements OnDestroy{
    subsSink = new SubSink();
    ngOnDestroy(): void {
        this.subsSink.unsubscribe();
    }
}