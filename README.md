# Projeto CI - Exercício 7

Projeto React simples com um **warning proposital** (variável não usada em `src/App.js`).

## Passo a passo

1. Crie um repositório vazio no GitHub (ex.: `projeto-ci`).
2. No terminal, dentro desta pasta:

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/projeto-ci.git
git push -u origin main
```

3. Abra a aba **Actions** no GitHub: o job **build** vai ficar **vermelho**
   ("Treating warnings as errors because process.env.CI = true").

4. Questão 1: no `package.json`, altere o script de build para:

```json
"build": "CI=false react-scripts build"
```

5. Questão 2: envie a correção:

```bash
git add package.json
git commit -m "fix: desativa CI strict mode no build (CI=false)"
git push
```

6. Volte na aba **Actions**: o job deve ficar **verde**, mesmo com o warning no log.
