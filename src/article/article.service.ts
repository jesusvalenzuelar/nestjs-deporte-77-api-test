import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    const article: Article = new Article();
    article.title = createArticleDto.title;
    article.content = createArticleDto.content;
    article.createdDate = new Date();

    return this.articleRepository.save(article);
  }

  findAll() {
    return this.articleRepository.find();
  }

  findOne(id: number) {
    return this.articleRepository.findOneBy({ id });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    const article = new Article();
    article.title = updateArticleDto.title;
    article.content = updateArticleDto.title;
    article.id = id;

    return this.articleRepository.save(article);
  }

  remove(id: number) {
    return this.articleRepository.delete(id);
  }
}
