export const openApiSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Foxes Technology API Documentation',
    version: '2.0.0',
    description: `Here you can find all the necessary API documentation and sandbox solutions for Foxes Technology. Use this documentation to help you implement Foxes Technology into your applications.

**Authentication**: In order to access routes other than \`/api/v2/login\`, you need to pass a header \`Api-Key\` with a value of \`account.apiAccessKey\` property you get after logging in through \`/api/v2/login\`. You can also find your \`Api-Key\` in Foxes Technology application, under "Gear" icon / your name > Settings > General information > Api Key.

**Date Format**: When passing \`date\` values, use standard UNIX Epoch time in seconds. Example: \`1525676400\`

**Feeder Data**: For any parameters you need ID's, that are not your own resources, refer to Feeder Data section.`,
    contact: {
      name: 'Foxes Technology',
      url: 'https://foxestechnology.com',
      email: 'contact@foxestechnology.com'
    }
  },
  servers: [
    {
      url: 'https://api-staging.foxestechnology.com',
      description: 'Staging Server'
    },
    {
      url: 'https://api.foxestechnology.com',
      description: 'Production Server'
    }
  ],
  security: [
    {
      ApiKeyAuth: []
    }
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Api-Key',
        description: 'API key obtained from /api/v2/login or from Settings in Foxes Technology application'
      }
    },
    schemas: {
      Activity: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '1'
          },
          title: {
            type: 'string',
            example: 'Desert Safari Adventure'
          },
          referenceCode: {
            type: 'string',
            example: 'f5c9fdf805975e296a25798c8109adbc'
          },
          coverId: {
            type: 'string',
            example: '1'
          },
          coverTitle: {
            type: 'string',
            example: 'Desert Landscape'
          },
          coverUrl: {
            type: 'string',
            example: 'https://cdn.foxestechnology.com/images/activity-1.jpg'
          },
          scheduledDepartures: {
            type: 'integer',
            example: 5
          },
          updated: {
            type: 'string',
            format: 'date-time',
            example: '2018-12-17 07:50:14'
          },
          owner: {
            type: 'string',
            example: 'Supplier 1'
          },
          currencyLabel: {
            type: 'string',
            example: '€'
          },
          departureFrom: {
            type: 'string',
            example: '1530601200'
          },
          departureTo: {
            type: 'string',
            example: '1561705200'
          },
          priceFrom: {
            type: 'string',
            example: '100'
          }
        }
      },
      Booking: {
        type: 'object',
        properties: {
          referenceCode: {
            type: 'string',
            example: 'BKG123456'
          },
          activityReferenceCode: {
            type: 'string',
            example: 'ACT789012'
          },
          status: {
            type: 'string',
            enum: ['pending', 'confirmed', 'cancelled', 'completed'],
            example: 'confirmed'
          },
          customerName: {
            type: 'string',
            example: 'John Doe'
          },
          customerEmail: {
            type: 'string',
            format: 'email',
            example: 'john@example.com'
          },
          totalAmount: {
            type: 'number',
            format: 'float',
            example: 250.00
          },
          currency: {
            type: 'string',
            example: 'EUR'
          },
          departureDate: {
            type: 'integer',
            format: 'int64',
            example: 1530601200
          }
        }
      },
      Contact: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 1
          },
          firstName: {
            type: 'string',
            example: 'John'
          },
          lastName: {
            type: 'string',
            example: 'Doe'
          },
          email: {
            type: 'string',
            format: 'email',
            example: 'john@example.com'
          },
          phone: {
            type: 'string',
            example: '+1234567890'
          },
          company: {
            type: 'string',
            example: 'Travel Agency Inc.'
          }
        }
      },
      Coupon: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 1
          },
          code: {
            type: 'string',
            example: 'SUMMER2024'
          },
          discountType: {
            type: 'string',
            enum: ['percentage', 'fixed'],
            example: 'percentage'
          },
          discountValue: {
            type: 'number',
            format: 'float',
            example: 20
          },
          expiryDate: {
            type: 'integer',
            format: 'int64',
            example: 1577836800
          },
          active: {
            type: 'boolean',
            example: true
          }
        }
      },
      Error: {
        type: 'object',
        properties: {
          code: {
            type: 'integer',
            example: 400
          },
          message: {
            type: 'string',
            example: 'Bad Request'
          },
          details: {
            type: 'string',
            example: 'Invalid parameters provided'
          }
        }
      },
      LoginRequest: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
            format: 'email',
            example: 'user@example.com'
          },
          password: {
            type: 'string',
            format: 'password',
            example: 'securePassword123'
          }
        }
      },
      LoginResponse: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            example: true
          },
          account: {
            type: 'object',
            properties: {
              apiAccessKey: {
                type: 'string',
                example: 'your-api-key-here'
              },
              email: {
                type: 'string',
                example: 'user@example.com'
              },
              name: {
                type: 'string',
                example: 'Travel Agency'
              }
            }
          }
        }
      }
    }
  },
  paths: {
    '/api/v2/activities': {
      get: {
        tags: ['Activities'],
        summary: 'Get all activities',
        description: 'Shows all available activities (owned and agent assigned) for current user',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'description',
            in: 'query',
            schema: { type: 'string' },
            description: 'Filter activities by description'
          },
          {
            name: 'departureDateFrom',
            in: 'query',
            schema: { type: 'integer' },
            description: 'Filter by departure date from (Unix timestamp)'
          },
          {
            name: 'departureDateTo',
            in: 'query',
            schema: { type: 'integer' },
            description: 'Filter by departure date to (Unix timestamp)'
          },
          {
            name: 'priceFrom',
            in: 'query',
            schema: { type: 'number' },
            description: 'Filter by minimum price'
          },
          {
            name: 'priceTo',
            in: 'query',
            schema: { type: 'number' },
            description: 'Filter by maximum price'
          },
          {
            name: 'p',
            in: 'query',
            schema: { type: 'integer' },
            description: 'Page number'
          }
        ],
        responses: {
          '200': {
            description: 'Returned when successful, along with the array of Activity objects',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    page: { type: 'integer' },
                    items: { type: 'integer' },
                    totalItems: { type: 'integer' },
                    payload: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/Activity' }
                    }
                  }
                }
              }
            }
          },
          '401': {
            description: 'Returned when trying to access this resource without being authorized',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '403': {
            description: 'Returned when trying to access this resource with wrong credentials',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/activity/{referenceCode}': {
      get: {
        tags: ['Activities'],
        summary: 'Get activity details',
        description: 'Shows details about activity (owned or agent assigned) for current user',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'referenceCode',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Activity reference code'
          }
        ],
        responses: {
          '200': {
            description: 'Activity details returned successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Activity' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Activity not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      },
      put: {
        tags: ['Activities'],
        summary: 'Update activity',
        description: 'Updates an Activity resource',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'referenceCode',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Activity reference code'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Activity' }
            }
          }
        },
        responses: {
          '200': {
            description: 'Activity updated successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Activity' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Activity not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      },
      delete: {
        tags: ['Activities'],
        summary: 'Delete activity',
        description: 'Deletes an Activity resource',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'referenceCode',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Activity reference code'
          }
        ],
        responses: {
          '204': {
            description: 'Activity deleted successfully'
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Activity not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/activity/{referenceCode}/{type}': {
      get: {
        tags: ['Activities'],
        summary: 'Get activity by type',
        description: 'Shows details about activity (owned or agent assigned) for current user by type',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'referenceCode',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Activity reference code'
          },
          {
            name: 'type',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Activity type'
          }
        ],
        responses: {
          '200': {
            description: 'Activity details returned successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Activity' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/activity': {
      post: {
        tags: ['Activities'],
        summary: 'Create activity',
        description: 'Create an Activity resource',
        security: [{ ApiKeyAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Activity' }
            }
          }
        },
        responses: {
          '201': {
            description: 'Activity created successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Activity' }
              }
            }
          },
          '400': {
            description: 'Bad request',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/activity/settings/{referenceCode}': {
      put: {
        tags: ['Activities'],
        summary: 'Update activity settings',
        description: 'Update activity settings (agent assigned) for current user',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'referenceCode',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Activity reference code'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  settings: {
                    type: 'object',
                    description: 'Activity settings object'
                  }
                }
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Settings updated successfully'
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/booknow/activity/{referenceCode}': {
      get: {
        tags: ['BookNow'],
        summary: 'Get booking-ready activity',
        description: 'Display details about Booking-ready Activity with departure dates in the future',
        parameters: [
          {
            name: 'referenceCode',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Activity reference code'
          }
        ],
        responses: {
          '200': {
            description: 'Activity details returned successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Activity' }
              }
            }
          },
          '404': {
            description: 'Activity not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/bookings': {
      get: {
        tags: ['Bookings'],
        summary: 'Get all bookings',
        description: 'List all created bookings',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'p',
            in: 'query',
            schema: { type: 'integer' },
            description: 'Page number'
          },
          {
            name: 'status',
            in: 'query',
            schema: {
              type: 'string',
              enum: ['pending', 'confirmed', 'cancelled', 'completed']
            },
            description: 'Filter by booking status'
          }
        ],
        responses: {
          '200': {
            description: 'List of bookings returned successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    page: { type: 'integer' },
                    items: { type: 'integer' },
                    totalItems: { type: 'integer' },
                    payload: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/Booking' }
                    }
                  }
                }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/booking/{override}': {
      post: {
        tags: ['Bookings'],
        summary: 'Create booking',
        description: 'Create new Booking resource',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'override',
            in: 'path',
            required: true,
            schema: { type: 'boolean' },
            description: 'Override booking restrictions'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Booking' }
            }
          }
        },
        responses: {
          '201': {
            description: 'Booking created successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Booking' }
              }
            }
          },
          '400': {
            description: 'Bad request',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/booking/{referenceCode}': {
      get: {
        tags: ['Bookings'],
        summary: 'Get booking details',
        description: "Get a single booking by it's reference code",
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'referenceCode',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Booking reference code'
          }
        ],
        responses: {
          '200': {
            description: 'Booking details returned successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Booking' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Booking not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      },
      put: {
        tags: ['Bookings'],
        summary: 'Update booking',
        description: "Get a single booking by it's reference code and update it",
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'referenceCode',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Booking reference code'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Booking' }
            }
          }
        },
        responses: {
          '200': {
            description: 'Booking updated successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Booking' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Booking not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/booking/payment/{referenceCode}': {
      put: {
        tags: ['Bookings'],
        summary: 'Add booking payment',
        description: 'Add a Booking payment to booking',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'referenceCode',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Booking reference code'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  amount: { type: 'number', format: 'float' },
                  paymentMethod: { type: 'string' },
                  paymentDate: { type: 'integer', format: 'int64' }
                }
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Payment added successfully'
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Booking not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/booking/status/{referenceCode}': {
      put: {
        tags: ['Bookings'],
        summary: 'Update booking status',
        description: "Get a single booking by it's reference code and update its status",
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'referenceCode',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Booking reference code'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['status'],
                properties: {
                  status: {
                    type: 'string',
                    enum: ['pending', 'confirmed', 'cancelled', 'completed']
                  }
                }
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Booking status updated successfully'
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Booking not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/booking/payments/{referenceCode}': {
      get: {
        tags: ['Bookings'],
        summary: 'Get booking payments',
        description: 'List all payments for a given Booking',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'referenceCode',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Booking reference code'
          }
        ],
        responses: {
          '200': {
            description: 'List of payments returned successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer' },
                      amount: { type: 'number', format: 'float' },
                      paymentMethod: { type: 'string' },
                      paymentDate: { type: 'integer', format: 'int64' },
                      status: { type: 'string' }
                    }
                  }
                }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Booking not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/contacts': {
      get: {
        tags: ['Contacts'],
        summary: 'Get all contacts',
        description: 'Retrieve a list of contacts',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'p',
            in: 'query',
            schema: { type: 'integer' },
            description: 'Page number'
          }
        ],
        responses: {
          '200': {
            description: 'List of contacts returned successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    page: { type: 'integer' },
                    items: { type: 'integer' },
                    totalItems: { type: 'integer' },
                    payload: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/Contact' }
                    }
                  }
                }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/contact/{id}': {
      get: {
        tags: ['Contacts'],
        summary: 'Get contact details',
        description: 'Retrieve a single contact',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'Contact ID'
          }
        ],
        responses: {
          '200': {
            description: 'Contact details returned successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Contact' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Contact not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      },
      put: {
        tags: ['Contacts'],
        summary: 'Update contact',
        description: 'Update Contact resource',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'Contact ID'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Contact' }
            }
          }
        },
        responses: {
          '200': {
            description: 'Contact updated successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Contact' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Contact not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      },
      delete: {
        tags: ['Contacts'],
        summary: 'Delete contact',
        description: 'Deletes Contact resource',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'Contact ID'
          }
        ],
        responses: {
          '204': {
            description: 'Contact deleted successfully'
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Contact not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/contact': {
      post: {
        tags: ['Contacts'],
        summary: 'Create contact',
        description: 'Create a Contact resource',
        security: [{ ApiKeyAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Contact' }
            }
          }
        },
        responses: {
          '201': {
            description: 'Contact created successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Contact' }
              }
            }
          },
          '400': {
            description: 'Bad request',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/login': {
      post: {
        tags: ['Authentication'],
        summary: 'User login',
        description: 'Authenticate user and retrieve API key',
        security: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/LoginRequest' }
            }
          }
        },
        responses: {
          '200': {
            description: 'Login successful, returns API key',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/LoginResponse' }
              }
            }
          },
          '401': {
            description: 'Invalid credentials',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/settings': {
      get: {
        tags: ['Settings'],
        summary: 'Get account settings',
        description: 'Retrieve account settings',
        security: [{ ApiKeyAuth: [] }],
        responses: {
          '200': {
            description: 'Settings returned successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    currency: { type: 'string' },
                    language: { type: 'string' },
                    timezone: { type: 'string' },
                    notifications: {
                      type: 'object',
                      properties: {
                        email: { type: 'boolean' },
                        sms: { type: 'boolean' }
                      }
                    }
                  }
                }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      },
      put: {
        tags: ['Settings'],
        summary: 'Update account settings',
        description: 'Update account settings',
        security: [{ ApiKeyAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  currency: { type: 'string' },
                  language: { type: 'string' },
                  timezone: { type: 'string' },
                  notifications: {
                    type: 'object',
                    properties: {
                      email: { type: 'boolean' },
                      sms: { type: 'boolean' }
                    }
                  }
                }
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Settings updated successfully'
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/coupons': {
      get: {
        tags: ['Coupons'],
        summary: 'Get all coupons',
        description: 'Get list of coupons from logged in agency',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'p',
            in: 'query',
            schema: { type: 'integer' },
            description: 'Page number'
          }
        ],
        responses: {
          '200': {
            description: 'List of coupons returned successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    page: { type: 'integer' },
                    items: { type: 'integer' },
                    totalItems: { type: 'integer' },
                    payload: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/Coupon' }
                    }
                  }
                }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/coupon/{id}': {
      get: {
        tags: ['Coupons'],
        summary: 'Get coupon by ID',
        description: 'Retrieve a single coupon by ID',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'Coupon ID'
          }
        ],
        responses: {
          '200': {
            description: 'Coupon details returned successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Coupon' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Coupon not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      },
      put: {
        tags: ['Coupons'],
        summary: 'Update coupon',
        description: 'Updates Coupon resource',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'Coupon ID'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Coupon' }
            }
          }
        },
        responses: {
          '200': {
            description: 'Coupon updated successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Coupon' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Coupon not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      },
      delete: {
        tags: ['Coupons'],
        summary: 'Delete coupon',
        description: 'Deletes Coupon resource',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'Coupon ID'
          }
        ],
        responses: {
          '204': {
            description: 'Coupon deleted successfully'
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Coupon not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/coupon': {
      post: {
        tags: ['Coupons'],
        summary: 'Create coupon',
        description: 'Create Coupon resource',
        security: [{ ApiKeyAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Coupon' }
            }
          }
        },
        responses: {
          '201': {
            description: 'Coupon created successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Coupon' }
              }
            }
          },
          '400': {
            description: 'Bad request',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/coupon/{code}': {
      get: {
        tags: ['Coupons'],
        summary: 'Get coupon by code',
        description: 'Retrieve a single coupon by code',
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'code',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Coupon code'
          }
        ],
        responses: {
          '200': {
            description: 'Coupon details returned successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Coupon' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '404': {
            description: 'Coupon not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/feederData': {
      get: {
        tags: ['Feeder Data'],
        summary: 'Get feeder data',
        description: 'Get feeder data containing reference IDs and values needed for other API calls',
        security: [{ ApiKeyAuth: [] }],
        responses: {
          '200': {
            description: 'Feeder data returned successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    countries: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: { type: 'integer' },
                          name: { type: 'string' }
                        }
                      }
                    },
                    currencies: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: { type: 'integer' },
                          code: { type: 'string' },
                          symbol: { type: 'string' }
                        }
                      }
                    },
                    languages: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: { type: 'integer' },
                          name: { type: 'string' },
                          code: { type: 'string' }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    },
    '/api/v2/mollie/request': {
      post: {
        tags: ['Payments'],
        summary: 'Request Mollie payment',
        description: 'Request Mollie payment URL for a booking',
        security: [{ ApiKeyAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['bookingReference', 'amount'],
                properties: {
                  bookingReference: {
                    type: 'string',
                    description: 'Booking reference code',
                    example: 'BKG123456'
                  },
                  amount: {
                    type: 'number',
                    format: 'float',
                    description: 'Payment amount',
                    example: 250.00
                  },
                  currency: {
                    type: 'string',
                    description: 'Currency code',
                    example: 'EUR'
                  },
                  description: {
                    type: 'string',
                    description: 'Payment description',
                    example: 'Booking payment for Desert Safari'
                  },
                  redirectUrl: {
                    type: 'string',
                    description: 'URL to redirect after payment',
                    example: 'https://yoursite.com/payment/success'
                  },
                  webhookUrl: {
                    type: 'string',
                    description: 'URL for payment webhook',
                    example: 'https://yoursite.com/api/webhook/mollie'
                  }
                }
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Payment URL returned successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    paymentUrl: {
                      type: 'string',
                      example: 'https://www.mollie.com/payscreen/select-method/xxx'
                    },
                    paymentId: {
                      type: 'string',
                      example: 'tr_xxxxx'
                    }
                  }
                }
              }
            }
          },
          '400': {
            description: 'Bad request',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          },
          '401': {
            description: 'Unauthorized access',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' }
              }
            }
          }
        }
      }
    }
  },
  tags: [
    {
      name: 'Authentication',
      description: 'Authentication and authorization endpoints'
    },
    {
      name: 'Activities',
      description: 'Manage activities and tours'
    },
    {
      name: 'BookNow',
      description: 'Public booking endpoints'
    },
    {
      name: 'Bookings',
      description: 'Manage bookings and reservations'
    },
    {
      name: 'Contacts',
      description: 'Manage customer contacts'
    },
    {
      name: 'Coupons',
      description: 'Manage discount coupons'
    },
    {
      name: 'Settings',
      description: 'Account settings management'
    },
    {
      name: 'Feeder Data',
      description: 'Reference data and lookup values'
    },
    {
      name: 'Payments',
      description: 'Payment processing endpoints'
    }
  ]
};
