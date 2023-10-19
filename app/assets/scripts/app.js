import '../styles/styles.css'
import Person from './modules/person';

if (module.hot) {
    module.hot.accept()
}

/* Lesson example code below this line*/


let john = new Person("John Doe", "red");
john.greet();

let jane = new Person("Jane Smith", "green");
jane.greet();
