const API_KEY = "1746e141194bb3c5a7187530792f8912";
const STATE = "GA";

$(document).ready(async () => {
  const decodeBillStatus = (statusNum) => {
    switch (statusNum) {
      case 1:
        return "Introduced";
      case 2:
        return "Engrossed";
      case 3:
        return "Enrolled";
      case 4:
        return "Passed";
      case 5:
        return "Vetoed";
      case 6:
        return "failed";
    }
  };

  const constructBillModelObject = ({ bill }) => {
    return {
      name: bill.bill_number,
      id: bill.bill_id,
      status: decodeBillStatus(bill.status),
      title: bill.title,
      description: bill.description,
    };
  };

  const getSearchedBills = () => {
    return $.ajax({
      url: `https://api.legiscan.com/?key=${API_KEY}&op=search&state=${STATE}`,
      method: "GET",
    });
  };

  const getSpecificBills = async (bills) => {
    const specificBills = [];
    for (let i = 0; i < bills.length - 1; i++) {
      const bill = await $.ajax({
        url: `https://api.legiscan.com/?key=${API_KEY}&op=getBill&id=${searchedBills[i].bill_id}`,
        method: "GET",
      });
      specificBills.push(constructBillModelObject(bill));
    }
    return specificBills;
  };

  const searchedBills = Object.values((await getSearchedBills()).searchresult);
  const specificBills = await getSpecificBills(searchedBills);

  const response = await $.ajax("/api/bill", {
    type: "POST",
    data: { bills: specificBills },
  });
});


