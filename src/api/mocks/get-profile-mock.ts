import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      name: 'Felipe Arruda',
      id: '1',
      email: 'felipe@mail.com',
      phone: '55999654584',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
