import { SubscriptionLike } from 'rxjs';

export class SubSink{
    protected _subsSink : SubscriptionLike[] = [];
    add(...subscriptions: SubscriptionLike[]) {
        this._subsSink = this._subsSink.concat(subscriptions);
      }
    
      set sink(subscription: SubscriptionLike) {
        this._subsSink.push(subscription);
      }
    
      unsubscribe() {
        this._subsSink.forEach((sub) => sub && sub.unsubscribe());
        this._subsSink = [];
      }
}