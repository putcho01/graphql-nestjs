import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Book } from "./book";
import { NewBookInput } from "./dto/newBook.input";

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepostiory: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepostiory.find();
  }

  async findOneById(id: number): Promise<Book> {
    const book = await this.booksRepostiory.findOne({ where: { id: id } });
    if (!book) {
      throw new NotFoundException(`Genre with id ${id} not found.`);
    }

    return book;
  }

  async create(data: NewBookInput): Promise<Book> {
    const book = this.booksRepostiory.create(data);
    await this.booksRepostiory.save(book);
    return book;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.booksRepostiory.delete(id);
    if (!result.affected) {
      return false;
    }
    return result.affected > 0;
  }
}
