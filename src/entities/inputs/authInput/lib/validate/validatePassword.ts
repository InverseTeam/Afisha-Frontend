export default function validatePassword(password: string) {
    if (!password.match(/^[a-zA-Z0-9!@#$%^&*]*$/)) {
        return 'Пароль должен состоять только из букв латиницы верхнего или нижнего регистра, цифр, специальных символов(!@$%^)';
    }
    if (password.match(/\s/)) {
        return 'Пароль не может содержать в себе пробелы.';
    }

    if (password.length < 6) {
        return 'Слабый пароль';
    }

    if (
        password.match(/^[a-z]+$/) ||
        password.match(/^\d+$/) ||
        (password.match(/123/) && password.match(/^\d+$/))
    ) {
        return 'Слабый пароль';
    }
    if (
        password.match(/^[a-z\d]+$/) ||
        password.match(/^(?=.*[a-z!@#$%^&*])[^A-Z\d]+$/) ||
        password.match(/^[\d!@#$%^&*]+$/) ||
        password.match(/^[a-zA-Z]+$/) ||
        password.match(/^[a-zA-Z!@#$%^&*]+$/) ||
        (password.match(/123/) && password.length < 8 && !password.match(/^\d+$/))
    ) {
        return 'Средний пароль';
    }
    if (
        password.match(/^(?=.*[a-z\d!@#$%^&*])|(?=.*[A-Z\d]).+$/) ||
        (password.match(/123/) && password.length > 8)
    ) {
        return 'Надежный пароль';
    }

    return 'Пароль должен состоять только из букв латиницы верхнего или нижнего регистра, цифр, специальных символов(!@$%^)';
}