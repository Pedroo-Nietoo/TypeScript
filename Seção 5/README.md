# Seção 5: Classes & Interfaces


### Modificadores de eixo:
herança -> allows you to share some common functionality and yet create more specialized blueprints;

public -> eixos de todos os lugares;

private -> para eixos internos;

protected -> para eixos internos também em classes herdadas;


static method -> A method you call directly on a class, not on an object created based on it;


abstract class -> a class that can't be instantiated, but has to be extended;

singleton class -> singleton class is configured such that you don't create it with "new"
but by calling a method which then ensures that only one instance of the class exists at any given time.

---

```public``` => pode ser acessado fora da classe;

```private``` => não pode ser acessado fora da classe;

```readonly``` => não permite a alteração da propriedade; usada apenas uma vez, durante a inicialização;

```protected``` => como o private, não pode ser acessado de fora, mas pode ser utilizado em todas as classes;

```static``` => método da classe em si, e não uma instância da mesma. Não precisa de objeto;

```abstract``` => Serve apenas para ter classes filhas; deve ser implementado por todas as outras classes/se quiser impor que todas as classes baseadas em outra classe; tenham que compartilhar uma mesma propriedade ou método, mas que não precise fornecer o valor/implementação concretos na classe


