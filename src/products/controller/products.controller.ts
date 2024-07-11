import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Controller('/products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}

  @Post('/')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  @Get('/')
  async findAllProducts() {
    return await this.productsService.findAll();
  }

  @Get('/:productId')
  async findProductById(@Param('productId') productId: string) {
    return await this.productsService.findOne(+productId);
  }

  @Put('/:productId')
  async updateProductById(@Param('productId') productId: string, @Body() updateProductDto: UpdateProductDto) {
    return await this.productsService.update(+productId, updateProductDto);
  }

  @Patch('/:productId')
  async inactiveProductById(@Param('productId') productId: string) {
    return await this.productsService.remove(+productId);
  }
}
