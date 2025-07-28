document.addEventListener('DOMContentLoaded', () => {
    const concepts  = [
        {
            title: 'Encapsulation',
            content: 'Encapsulation is the bundling of data and methods that operate on that data, restricting direct access to some of the object\'s components.',
            id: 1,
        },
        {
            title: 'Abstraction',
            content: 'Abstraction means hiding complex implementation details and showing only the necessary features of an object.',
            id: 2,
        },
        {
            title: 'Inheritance',
            content: 'Inheritance is a mechanism where one class can inherit the properties and methods of another class, promoting code reuse.',
            id: 3,
        },
        {
            title: 'Polymorphism',
            content: 'Polymorphism allows objects to be treated as instances of their parent class rather than their actual class. It enables the same method to behave differently on different classes.',
            id: 4,
        },
        {
            title: 'Composition over Inheritance',
            content: 'Favoring composition means building complex objects by combining simpler ones rather than relying on class inheritance, which can lead to rigid and tightly coupled code.',
            id: 5,
        },
    ];


    fetch('./concept-template.html')
        .then(res => res.text())
        .then(template => {
            

        function updateConcept(){
                const item = Math.floor(Math.random() * concepts.length);
                const concepElement = document.getElementById('container');
                const html = template.replace(/{{title}}/g, concepts[item].title)
                                    .replace(/{{content}}/g, concepts[item].content)
                concepElement.innerHTML = html;
            
        }             
        updateConcept();
        setInterval(updateConcept, 1500);
        });
   
});
