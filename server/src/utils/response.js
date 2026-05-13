export function success(res, data, meta = {}) {
  const body = { success: true, data }
  if (meta.message) body.message = meta.message
  return res.status(meta.status || 200).json(body)
}

export function paginated(res, data, pagination) {
  return res.status(200).json({
    success: true,
    data,
    pagination: {
      page: pagination.page,
      limit: pagination.limit,
      total: pagination.total,
      pages: Math.ceil(pagination.total / pagination.limit),
    },
  })
}
