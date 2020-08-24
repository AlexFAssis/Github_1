const CategoriaReceita = require('../models/CategoriaReceita');
const Receita = require('../models/Receita');

class categoriaReceitaController {

    async index(req, res) {
        return res.render('categoriaReceita/cadastro', { title: 'Cadastro de Categoria de Receita' })
    }

    async novo(req, res) {
        try {
            if (req.body.categoria) {
                const categoriasReceita = await CategoriaReceita.find();

                var achouNome = false
                for (let i = 0; i < categoriasReceita.length; i++) {
                    if (req.body.categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') == categoriasReceita[i].categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) {
                        achouNome = true
                    }
                }

                if (!achouNome) {
                    await CategoriaReceita.create(req.body);
                    return res.redirect('/categoriaReceita/listar');
                } else {
                    req.flash('error', 'Já existe uma categoria com esse nome, digite outro nome')
                    return res.redirect('/categoriaReceita/cadastro');
                }
            } else {
                res.sendStatus(404).end();
                console.error('ocorreu um erro ao cadastrar a Categoria da receita')
            }
        } catch (erro) {
            console.error(erro);
            res.sendStatus(500).end();
        }
    }

    async listar(req, res) {
        try {
            const categoriasReceita = await CategoriaReceita.find()
            return res.render('categoriaReceita/listagem', { categoriasReceita, title: 'Listagem de Categoria de Receita' })
        } catch (erro) {
            console.error(erro);
            res.sendStatus(500).end();
        }
    }

    async obterUm(req, res) {
        const id = req.params.id;
        try {
            const categoriaReceita = await CategoriaReceita.findById(id);
            if (categoriaReceita) {
                res.send(categoriaReceita);
            }
        } catch (erro) {
            console.error(erro);
            res.sendStatus(500).end();
        }
    }

    async editar(req, res) {
        const categoriaReceita = await CategoriaReceita.findOne({ _id: req.params.id });

        if (categoriaReceita) {
            return res.render('categoriaReceita/editar', { categoriaReceita, title: 'Edição de Categoria de Receita' })
        } else {
            console.error('Categoria não encontrada')
        }

    }

    async atualizar(req, res) {
        const id = req.params.id;
        const categoriasReceita = await CategoriaReceita.find()
        const categoriaEditada = await CategoriaReceita.findById(id)

        var achouNome = false

        for (let i = 0; i < categoriasReceita.length; i++) {
            if (categoriasReceita[i]._id.toString() != categoriaEditada._id.toString()) {
                if (req.body.categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') == categoriasReceita[i].categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') && req.body.categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') != categoriaEditada.categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) {
                    achouNome = true
                }
            }
        }

        try {
            if (!achouNome) {
                if (req.body.categoria) {
                    const categoriaReceita = await CategoriaReceita.findByIdAndUpdate(id, req.body);
                    return res.redirect('/categoriaReceita/listar');
                }
            } else {
                req.flash('error', 'Já existe uma categoria com esse nome, digite outro nome')
                return res.redirect(`/categoriaReceita/editar/${id}`);
            }
        } catch (erro) {
            console.error(erro);
            res.sendStatus(500).end();
        }
    }

    async excluir(req, res) {
        const id = req.params.id;
        var podeExcluir = true
        let vetError = []
        const receita = await Receita.find({ categoriaReceita: id })
        const categoria = await CategoriaReceita.findById(id)

        if (receita.length > 0) {
            podeExcluir = false
            vetError.push(categoria.categoria + ' possui receitas cadastradas, não é possível ser deletado(a)')
        }

        if (!podeExcluir) {
            req.flash('error', vetError)
            return res.redirect('/categoriaReceita/listar');
        } else {
            try {
                const categoriaReceita = await CategoriaReceita.findByIdAndDelete(id);
                if (categoriaReceita) {
                    res.redirect('/categoriaReceita/listar');
                    // res.sendStatus(204).end();
                } else {
                    res.sendStatus(404).end();
                }
            } catch (erro) {
                console.error(erro);
                res.sendStatus(500);
            }
        }
    }
}

module.exports = new categoriaReceitaController;