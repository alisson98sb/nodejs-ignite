"use strict";
//responsavel por receber alguns dados para que crimos os nomes dos nossos cursos
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duraction, educator }) {
        console.log(name, duraction, educator);
    }
}
exports.default = new CreateCourseService();
