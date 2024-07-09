function StudentCards(name, surname, yearsBorn, marks){
    this.name = name;
    this.surname = surname;
    this.yearsBorn = yearsBorn;
    this.marks = marks;
    this.visit = new Array(25).fill(undefined);

        this.viewAgeAndMedulMarks = function (){ // Виводимо в консоль Вік та середню оцінку
            console.log(`Age: ${new Date().getFullYear() - this.yearsBorn}, Average rating: ${averageRating(this.marks)}`);
    }

        this.present = function (){ // Ставимо, що студент був на занятті
            for(let i = 0; i < this.visit.length; i++){
                if(this.visit[i] === undefined){
                    this.visit[i] = true;
                    break;
                }
            }
        }

        this.absent = function (){ // Ставимо пропуск
            for(let i = 0; i < this.visit.length; i++){
                if(this.visit[i] === undefined){
                    this.visit[i] = false;
                    break;
                }
            }
        }

        this.summary = function (){ //Вираховуємо коєфіцієнт відвідувальності та оцінки та виводимо повідомлення

            let averageVisit = averageAttendance(this.visit);
            let averageMarks = averageRating(this.marks);

            if (averageVisit > 0.9 && averageMarks > 90) {
                console.log(`${this.name} ${this.surname} - Молодець!`);
            } else if (averageVisit > 0.9 || averageMarks > 90) {
                console.log(`${this.name} ${this.surname} - Добре, але можна краще!`)
            } else{
                console.log(`${this.name} ${this.surname} - Редиска!`)
            }

        }
}

function averageRating(studentsMarks){ //Тут вираховуємо середню оцінку
    let averageMarks = 0;
    for(let i = 0; i < studentsMarks.length; i++){
        averageMarks += studentsMarks[i];
    }
    averageMarks /= studentsMarks.length;
    return averageMarks;
}

function averageAttendance(studentsVisit){ //Вираховуємо коєфіцієнт відвідувальності
    let count = 0;
    for(let i = 0; i < studentsVisit.length; i++){
        if(studentsVisit[i] === true){
            count++;
        }
    }
    return count / studentsVisit.length ;
}

let Luck = new StudentCards('Luck', 'Michel', '2001', [100, 100, 100, 100, 100, 100])
let Jons = new StudentCards('Jons', 'Silron', '2000', [90, 100, 97, 80, 95, 90]);
let Anna = new  StudentCards('Anna', 'Jalson', '2002', [80, 70, 97, 50, 60, 80]);

Luck.present(); Luck.present(); Luck.present(); Luck.present();
Luck.present(); Luck.present(); Luck.present(); Luck.present();
Luck.present(); Luck.present(); Luck.present(); Luck.present();
Luck.present(); Luck.present(); Luck.present(); Luck.present();
Luck.present(); Luck.present(); Luck.present(); Luck.present();
Luck.present(); Luck.present(); Luck.present(); Luck.present(); Luck.present();

Jons.absent(); Jons.present(); Jons.absent(); Jons.present();
Jons.absent(); Jons.present(); Jons.absent(); Jons.present();
Jons.absent(); Jons.present(); Jons.absent(); Jons.present();
Jons.absent(); Jons.present(); Jons.absent(); Jons.present();
Jons.absent(); Jons.present(); Jons.absent(); Jons.present();
Jons.absent(); Jons.present(); Jons.absent(); Jons.present(); Jons.absent();

Anna.absent(); Anna.absent(); Anna.absent(); Anna.absent();
Anna.absent(); Anna.absent(); Anna.absent(); Anna.absent();
Anna.absent(); Anna.absent(); Anna.absent(); Anna.absent();
Anna.absent(); Anna.absent(); Anna.absent(); Anna.absent();
Anna.absent(); Anna.absent(); Anna.absent(); Anna.absent();
Anna.absent(); Anna.absent(); Anna.absent(); Anna.absent(); Anna.present();


Luck.viewAgeAndMedulMarks()
Luck.summary()

Jons.viewAgeAndMedulMarks()
Jons.summary()

Anna.viewAgeAndMedulMarks()
Anna.summary()