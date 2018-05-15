import { Component } from '@angular/core';

import { ProjetosPage } from '../projetos/projetos';
import { TarefasPage } from '../tarefas/tarefas';
import { AnotacoesPage } from '../anotacoes/anotacoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = TarefasPage;
  tab2Root: any = ProjetosPage;
  tab3Root: any = AnotacoesPage;

  constructor() {

  }
}
