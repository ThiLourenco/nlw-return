import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  //{ create: async () => {} },
  //{ sendMail: async () => {} },
  { create: createFeedbackSpy},
  { sendMail: sendMailSpy },
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      //screenshot: 'test.jpg', // format invalid
      screenshot: 'data:image/png;base64,1asd89sad894a9d4a94'
    })).resolves.not.toThrow(); // resolves without erro

    // test fn with Jest Spy
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,1asd89sad894a9d4a94'
    })).rejects.toThrow(); // rejects with erro
  });

  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,1asd89sad894a9d4a94'
    })).rejects.toThrow(); // rejects with erro
  });

  it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'test.jpg', 
    })).rejects.toThrow(); // rejects with erro
  });
});
