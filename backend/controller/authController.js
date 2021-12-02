exports.login = (req, res) => {
    const user = await User.findOne({email: request.body.email});
    if (!user) return response.status(422).send('Email or Password is not correct');

    const checkPassword = await bcrypt.compare(request.body.password, user.password);

    if (!checkPassword) return response.status(422).send('Email or Password is not correct');

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 * 24 });
    response.header('auth-token', token).send(token);
}