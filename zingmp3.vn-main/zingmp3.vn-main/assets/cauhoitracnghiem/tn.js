const questions = [
  {
    question: "Ca khúc nào được yêu thích nhất 2023",
    options: ["Nàng thơ", "1234", "Sorry", "Hello"],
    answer: "A",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2022",
    options: ["UPDATE", "INSERT", "SELECT", "DELETE"],
    answer: "C",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2021",
    options: ["CREATE TABLE", "UPDATE SET", "SELECT FROM", "INSERT INTO"],
    answer: "D",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2020",
    options: ["#my-class", ".my-class", "my-class", "'my-class'"],
    answer: "D",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2019",
    options: ["<link>", "<href>", "<a>", "<url>"],
    answer: "C",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2018",
    options: ["shift()", "<href>", "unshift()", "push()"],
    answer: "D",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2017",
    options: ["SELECT", "INSERT INTO", "UPDATE", "DELETE"],
    answer: "A",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2016",
    options: ["#p", ".p", "p", "*p"],
    answer: "C",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2015",
    options: [
      "Cung cấp môi trường tạo lập CSDL",
      "Cung cấp môi trường cập nhật và khai thác dữ liệu",
      "Cung cấp công cụ quản lí bộ nhớ",
      "Cung cấp công cụ kiểm soát, điều khiển truy cập vào CSDL",
    ],
    answer: "C",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2014",
    options: ["shift()", "unshift()", "push()", "pop()"],
    answer: "A",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2013",
    options: [
      "parseInt()",
      "myFunction()",
      "addEventListener()",
      "Tất cả đều đúng",
    ],
    answer: "A",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2012",
    options: ["var", "let", "const", "Tất cả đều đúng"],
    answer: "D",
  },
  {
    question: " Ca khúc nào được yêu thích nhất 2011",
    options: ["Phía máy chủ", "Phía máy khách", "Cả hai", "Không phải cả hai"],
    answer: "B",
  },
  {
    question: " Ca khúc nào được yêu thích nhất 2010",
    options: [
      "Cascading Style Sheet",
      "Creative Style Sheet",
      "Computer Style Sheet",
      "Colorful Style Sheet",
    ],
    answer: "B",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2009",
    options: [
      "Ngôn ngữ lập trình Pascal",
      "Ngôn ngữ C",
      "Các kí hiệu toán học dùng để thực hiện các tính toán",
      "Hệ thống các kí hiệu để mô tả CSDL",
    ],
    answer: "D",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2008",
    options: [
      "HyperText Markup Language",
      "HyperTool Markup Language",
      "HomeTool Markup Language",
      "HighText Markup Language",
    ],
    answer: "B",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2007",
    options: [
      "Đảm bảo tính độc lập dữ liệu",
      "Khai báo kiểu dữ liệu, cấu trúc dữ liệu và các ràng buộc trên dữ liệu của CSDL",
      "Mô tả các đối tượng được lưu trữ trong CSDL",
      "Khai báo kiểu dữ liệu của CSDL",
    ],
    answer: "B",
  },
  {
    question: "Ca khúc nào được yêu thích nhất 2006",
    options: [
      "The World Wide Web Consortium",
      "Microsoft",
      "Netscape",
      "Tất cả đều sai",
    ],
    answer: "A",
  },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const question = questions[currentQuestion];

  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.value = String.fromCharCode(65 + index); // Chuyển đổi số thứ tự thành ký tự A, B, C, D
    button.addEventListener("click", () => {
      checkAnswer(button.value);
    });
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestion];
  const resultElement = document.getElementById("result");
  const correctAnswerElement = document.getElementById("correct-answer");
  const correctAnswerTextElement = document.getElementById(
    "correct-answer-text"
  );

  // Hiển thị đáp án đúng
  correctAnswerTextElement.textContent =
    question.options[
      question.options.findIndex(
        (option, index) => String.fromCharCode(65 + index) === question.answer
      )
    ];
  correctAnswerElement.style.display = "block";

  // Kiểm tra đáp án
  if (selectedOption === question.answer) {
    score++;
    resultElement.textContent = "Đúng!";
  } else {
    resultElement.textContent = "Sai!";
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    resultElement.textContent = `Kết quả: ${score}/${questions.length}`;

    // Hiển thị thông báo sau khi hoàn thành trắc nghiệm
    if (score === questions.length) {
      alert("Chúc mừng! Bạn đã trả lời đúng tất cả câu hỏi.");
    } else {
      confirm("Bạn có muốn làm lại trắc nghiệm không?");
    }
  }
}

displayQuestion();
