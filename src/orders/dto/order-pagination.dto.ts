import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatusList } from '../enums/order.enum';
import { PaginationDto } from '../common';
import { OrderStatus } from '@prisma/client';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `status must be a valid enum value: ${OrderStatusList.join(', ')}`,
  })
  status?: OrderStatus;
}
