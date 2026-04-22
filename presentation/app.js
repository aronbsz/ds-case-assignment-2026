const DATA = {
  kpis: [
    { label: "Project scope", value: "Small-data PoC" },
    { label: "Dataset class balance", value: "~73.5% No Churn / 26.5% Churn" },
    { label: "Best ROC-AUC", value: "0.853 (Random Forest)" },
    { label: "Best PR-AUC", value: "0.680 (Random Forest)" }
  ],
  models: [
    { name: "Logistic Regression", rocAuc: 0.852, prAuc: 0.668, churnPrecision: 0.68, churnRecall: 0.55 },
    { name: "Random Forest", rocAuc: 0.853, prAuc: 0.680, churnPrecision: 0.69, churnRecall: 0.52 }
  ],
  increase: [
    "TotalCharges (+)",
    "Contract_Month-to-month (+)",
    "InternetService_Fiber optic (+)",
    "PaperlessBilling (+)",
    "TechSupport_No (+)",
    "PaymentMethod_Electronic check (+)",
    "OnlineSecurity_No (+)",
    "SeniorCitizen (+)"
  ],
  decrease: [
    "tenure (-)",
    "Contract_Two year (-)",
    "InternetService_DSL (-)",
    "TechSupport_Yes (-)",
    "Dependents (-)",
    "OnlineSecurity_Yes (-)",
    "PaymentMethod_Mailed check (-)"
  ],
  rfTop: [
    "tenure",
    "Contract_Month-to-month",
    "TotalCharges",
    "MonthlyCharges",
    "TechSupport_No",
    "OnlineSecurity_No",
    "InternetService_Fiber optic",
    "PaymentMethod_Electronic check"
  ],
  sampleEmail: `Subject: We are here to make your connection even smoother\n\nHi Customer name,\n\nWelcome to Vodafone. We are glad to have you with us and we want your experience to stay simple and reliable.\n\n- Get priority tech support whenever you need quick help\n- Add online security features for extra peace of mind\n- Review your plan together with us to make sure it fits your needs\n\nReply to this email or sign in to your account to explore your options today.\n\nWarm regards,\nVodafone Customer Care Team`
};

function populateKpis() {
  const root = document.getElementById("kpi-grid");
  root.innerHTML = DATA.kpis
    .map(
      (k) => `
      <article class="kpi-card">
        <div class="kpi-label">${k.label}</div>
        <div class="kpi-value">${k.value}</div>
      </article>`
    )
    .join("");
}

function populateTable() {
  const tbody = document.querySelector("#model-table tbody");
  tbody.innerHTML = DATA.models
    .map(
      (m) => `
      <tr>
        <td>${m.name}</td>
        <td>${m.rocAuc.toFixed(3)}</td>
        <td>${m.prAuc.toFixed(3)}</td>
        <td>${m.churnPrecision.toFixed(2)}</td>
        <td>${m.churnRecall.toFixed(2)}</td>
      </tr>`
    )
    .join("");
}

function populateMiniCards() {
  const root = document.getElementById("perf-cards");
  root.innerHTML = DATA.models
    .map(
      (m) => `
      <div class="mini">
        <div><strong>${m.name}</strong></div>
        <div>Ranking quality: ROC-AUC ${m.rocAuc.toFixed(3)}, PR-AUC ${m.prAuc.toFixed(3)}</div>
        <div>Churn capture: Recall ${m.churnRecall.toFixed(2)} at Precision ${m.churnPrecision.toFixed(2)}</div>
      </div>`
    )
    .join("");
}

function populateLists() {
  const inc = document.getElementById("increase-list");
  const dec = document.getElementById("decrease-list");
  const rf = document.getElementById("rf-list");

  inc.innerHTML = DATA.increase.map((x) => `<li>${x}</li>`).join("");
  dec.innerHTML = DATA.decrease.map((x) => `<li>${x}</li>`).join("");
  rf.innerHTML = DATA.rfTop.map((x) => `<li>${x}</li>`).join("");
}

function populateEmail() {
  document.getElementById("sample-email").textContent = DATA.sampleEmail;
}

function init() {
  populateKpis();
  populateTable();
  populateMiniCards();
  populateLists();
  populateEmail();
}

init();
