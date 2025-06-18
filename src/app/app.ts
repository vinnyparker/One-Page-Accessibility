import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.html',
styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
title = 'onepage-site';

currentFontSizeLevel: number = 0;
// Definir limites visuais para evitar fontes absurdamente grandes/pequenas,
  // mesmo que a lógica de incremento/decremento seja ilimitada no clique.
  // Estes são os níveis que terão CSS correspondente.
  maxVisualFontSizeLevel: number = 10;
minVisualFontSizeLevel: number = -10;


constructor(private renderer: Renderer2) {}

ngOnInit(): void {
const savedContrast = localStorage.getItem('high-contrast-mode');
if (savedContrast === 'true') {
this.renderer.addClass(document.body, 'high-contrast-mode');
}

const savedFontSize = localStorage.getItem('font-size-level');
if (savedFontSize) {
this.currentFontSizeLevel = parseInt(savedFontSize, 10);
this.applyFontSizeClass();
}
}

adjustFontSize(direction: number): void {
if (direction === 0) { // Resetar para o tamanho original
      this.currentFontSizeLevel = 0;
} else {
// Ajusta o nível, mas mantém dentro dos limites visuais para aplicar classes CSS
      // A UI só reagirá até estes limites, mas o currentFontSizeLevel pode ir além teoricamente.
      // Podemos adicionar um limite aqui se você quiser que o número pare de aumentar no JS.
      // Por exemplo:
      // this.currentFontSizeLevel = Math.max(this.minVisualFontSizeLevel, Math.min(this.maxVisualFontSizeLevel, this.currentFontSizeLevel + direction));
      // Por enquanto, vamos deixá-lo ir além para que ele 'tente' aplicar a classe mais próxima.
      this.currentFontSizeLevel += direction;
}
this.applyFontSizeClass();
localStorage.setItem('font-size-level', this.currentFontSizeLevel.toString());
}

applyFontSizeClass(): void {
// Lista de todas as classes de fonte possíveis para remover
    const allFontSizeClasses = [];
for (let i = 1; i <= this.maxVisualFontSizeLevel; i++) {
allFontSizeClasses.push(`font-size-plus-${i}`);
}
for (let i = 1; i <= Math.abs(this.minVisualFontSizeLevel); i++) {
allFontSizeClasses.push(`font-size-minus-${i}`);
}
// E as classes antigas que você tinha, caso ainda estejam em cache
    allFontSizeClasses.push('font-size-xsmall', 'font-size-small', 'font-size-medium', 'font-size-large', 'font-size-xlarge', 'font-size-xxlarge', 'font-size-xxxlarge', 'font-size-xxsmall');


// Remove todas as classes de fonte conhecidas do body
    allFontSizeClasses.forEach(cls => {
if (document.body.classList.contains(cls)) {
this.renderer.removeClass(document.body, cls);
}
});

// Adiciona a nova classe com base no currentFontSizeLevel
    if (this.currentFontSizeLevel > 0 && this.currentFontSizeLevel <= this.maxVisualFontSizeLevel) {
this.renderer.addClass(document.body, `font-size-plus-${this.currentFontSizeLevel}`);
} else if (this.currentFontSizeLevel < 0 && this.currentFontSizeLevel >= this.minVisualFontSizeLevel) {
this.renderer.addClass(document.body, `font-size-minus-${Math.abs(this.currentFontSizeLevel)}`);
}
// Se currentFontSizeLevel for 0, nenhuma classe será adicionada (padrão)
  }

toggleContrast(): void {
if (document.body.classList.contains('high-contrast-mode')) {
this.renderer.removeClass(document.body, 'high-contrast-mode');
localStorage.setItem('high-contrast-mode', 'false');
} else {
this.renderer.addClass(document.body, 'high-contrast-mode');
localStorage.setItem('high-contrast-mode', 'true');
}
}
}
