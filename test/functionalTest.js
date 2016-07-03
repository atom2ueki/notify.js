var assert = chai.assert;

describe('Notify', function(){
    it('can be invoked', function(){
        assert(typeof notify, "function", "cannot be invoked");
    });
    it('can callback on click', function(pass){
        notify.show('onclick', function(){
            pass();
        });
        setTimeout(function(){
            notify.notification.onclick.apply(notify.notification);
        }, 1000);
    });
});