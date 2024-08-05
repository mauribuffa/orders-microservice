import { OrderStatus } from '@prisma/client';
import { IsEnum, IsUUID } from 'class-validator';
import { OrderStatusList } from '../enums/order.enum';

export class ChangeOrderStatusDto {
  @IsUUID(4)
  id: string;

  @IsEnum(OrderStatusList, {
    message: `status must be one of the following values: ${Object.values(
      OrderStatusList,
    ).join(', ')}`,
  })
  status: OrderStatus;
}
