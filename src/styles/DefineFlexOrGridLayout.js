
export const defineFLexOrGridLayout = (quantityOfQuestions) =>{
    return quantityOfQuestions > 1
    ? 'answersWrapperGrid'
    : 'answersWrapperFlex'
}