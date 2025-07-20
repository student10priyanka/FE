function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  if (!dobInput) {
    alert("Please select your date of birth");
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate(); // ✅ Corrected `.getDate()`

  if (ageDays < 0) {
    ageMonths--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  const result = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
  document.getElementById("result").innerText = result;
}
