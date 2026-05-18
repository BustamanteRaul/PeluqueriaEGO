document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#otpinputs input");

  inputs.forEach((input, index) => {
    // Permitir solo números
    input.addEventListener("keydown", (e) => {
      if (
        !(
          (e.key >= "0" && e.key <= "9") ||
          e.key === "Backspace" ||
          e.key === "Tab" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight"
        )
      ) {
        e.preventDefault();
      }
    });

    // Pasar automáticamente al siguiente input
    input.addEventListener("input", () => {
      if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    // Volver al anterior si borrás
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && input.value === "" && index > 0) {
        inputs[index - 1].focus();
      }
    });

    // Manejo del pegado en cualquier input
    input.addEventListener("paste", (e) => {
      e.preventDefault();
      const pasteData = e.clipboardData.getData("text").trim();

      // Repartir cada número en los inputs
      pasteData.split("").forEach((char, i) => {
        if (i < inputs.length && !isNaN(char)) {
          inputs[i].value = char;
        }
      });

      // Enfocar el último input lleno
      inputs[Math.min(pasteData.length, inputs.length) - 1].focus();
    });
  });
});
