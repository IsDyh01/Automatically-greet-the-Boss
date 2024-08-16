const getHelloContent = async (openai, jobDes, personalDes) => {
  try {
    const prompt = `你好，这个是我都个人简历内容${personalDes},这个是我要找的工作简介${jobDes},请根据我的简历内容以及工作简介，为我生成一段给公司hr打招呼的招呼语，只用生成招呼语额外的跟我打招呼的语句都不要！`;
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  const helloConent = completion.choices[0].message.content;
  return helloConent;
  } catch (error) {
    console.log(error);
    
    return Promise.reject('生成招呼语失败~')
  }
};

module.exports = getHelloContent;
