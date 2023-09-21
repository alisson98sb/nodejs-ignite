//responsavel por receber alguns dados para que crimos os nomes dos nossos cursos

interface Course {
    name: string;
    duraction: number;
    educator: string;
}

class CreateCourseService {
    execute({name, duraction, educator}: Course) {
        console.log(name, duraction, educator);
    }
}

export default new CreateCourseService();