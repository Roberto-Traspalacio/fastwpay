export const LastTransactionsInterceptor = (transactionsList = []) => {
  let newArray = transactionsList.map((transaction) => {
    const newDate = new Date(transaction.created_at);
    const day = newDate.getDate().toString().padStart(2, '0');
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const year = newDate.getFullYear().toString();
    const formattedDate = day + '/' + month + '/' + year;

    return {
      id: transaction.id,
      reference: transaction.reference,
      createdAt: formattedDate,
      amount: transaction.amount,
      status: transaction.status,
    };
  });
  newArray = newArray.slice(0, 4);

  return newArray;
};
