const inquire = require('inquirer');

const prompt = inquire.createPromptModule();

// prompt工具函数
const inputPrompt = async (params) => {
    const { message, name } = params
    const answer = await prompt([{
        type: 'input',
        message,
        name
    }])
    return answer;
}

module.exports = {
    inputPrompt
}