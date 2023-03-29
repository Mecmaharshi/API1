const get = (req,res) => {
    const data = req.query;
    console.log('Received data:', data);
    res.send({ 
        message: 'Data received successfully!',
        firstName: data.firstName,
        lastName: data.lastName,
        noOfRooms: data.noOfRooms,
        no_of_people: data.no_of_people,
        email: data.email,
        phone: data.phone,
        check_in: data.check_in,
        check_out: data.check_out,
        paymentMethod: data.paymentMethod,
        roomType: data.roomType
    });
}

module.exports = get;