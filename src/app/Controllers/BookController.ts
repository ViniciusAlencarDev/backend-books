import { Request, Response } from 'express';
import { ResponseRequest } from '../../types/types';
import axiosModule from '../../config/axios';

const responseModel: ResponseRequest = {
    success: false,
    data: [],
    error: []
}

class BookController {

    static async getBook(req: Request, res: Response) {
        const response: ResponseRequest = { ...responseModel }

        await axiosModule.baseURLBooks.get('/')
            .then(result => {
                response.data = result.data;
            })
            .catch(error => console.error(error))

        return res.status(200).json(response)
    }

}

export default BookController
