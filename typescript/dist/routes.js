"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
const createCourseService_1 = __importDefault(require("./createCourseService"));
function CreateCourse(request, response) {
    createCourseService_1.default.execute({
        name: "testenome",
        duraction: 1,
        educator: "Nome do educador"
    });
    return response.send();
}
exports.CreateCourse = CreateCourse;
