// const person: {
//     name: string,
//     age: number
// } = {

// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {

enum Role { admin = 5, read_only, author = "test" };

const person = {
    name: 'Pedro',
    age: 17,
    hobbies: ['Sports', 'Cooking'],
    role: Role.author
};

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'a', 'a']

let favoriteActivities: string[] = ['Programming']

console.log(person.name);

for (const hobbie of person.hobbies) {
    console.log(hobbie.toUpperCase())
}

if (person.role === Role.author) {
    console.log('Is author')
}