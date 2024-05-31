let ladder = {
    lader: 0,
    up: function () {
        this.lader++;
        if(this.lader > 13 ){ //В среднем в лестнице 13 ступенек)
            this.lader= 13;
        }
        console.log(this.lader);
        return this;
    },
    down: function () {
        this.lader--;
        if(this.lader < 0){
            this.lader= 0;
        }
        console.log(this.lader);
        return this;
    },
    showStep: function () {
        console.log('You on ' + this.lader + '-th ladders now!');
        return this;
    }
};

ladder.up();
ladder.down();
ladder.showStep();
ladder.up().up().down().showStep();