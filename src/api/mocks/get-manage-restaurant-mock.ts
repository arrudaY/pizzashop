import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    name: 'Rei do Lanche',
    id: '20',
    createdAt: new Date(),
    updatedAt: null,
    description: null,
    managerId: '1',
  })
})
