const validate = (values) => {
    const { position, company, date } = values
    const errors = {}
    if (!position) errors.position = "Position input is required!"
    if (!company) errors.company = "Company input is required!"
    if (!date) errors.date = "date input is required!"

    return errors
}

export default validate