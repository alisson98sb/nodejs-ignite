import { Request, Response } from "express";
import CreateCourseService from './createCourseService';


export function CreateCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "testenome",
        duraction: 1, 
        educator: "Nome do educador"    
    });

    return response.send();
}