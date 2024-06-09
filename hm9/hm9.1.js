let company = {
    sales : [{name: 'John' , salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function coutSalary (depart){
    if (Array.isArray(depart)){
        let sum = 0
        if (depart.length === 0 ){
            return 0;
        } else {
            return depart[0].salary + coutSalary(depart.slice(1));
        }
    }
    else {
            let keys = Object.keys(depart);
            if (keys.length === 0) {
                return 0;
            } else{
                let firstKey = keys[0];
                let remainingKeys = keys.slice(1);
                let sumOfFirstKey = coutSalary(depart[firstKey]);
                let sumOfRemainingKeys = coutSalary(Object.fromEntries(remainingKeys.map(key => [key, depart[key]])));
                return sumOfFirstKey + sumOfRemainingKeys;
            }

        }
    }

let total = coutSalary(company);

console.log('Salary all company ---> ' + total);