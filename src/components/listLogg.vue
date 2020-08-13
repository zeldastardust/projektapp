<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Datum</th>
                        <th>Häst</th>
                        <th>Träningstyp</th>
                        <th>Värmning</th>
                        <th>Intervaller</th>
                        <th>Tider</th>
                        <th>Noteringar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="logg in Loggs" :key="logg._id">
                        <td>{{ logg.date }}</td>
                        <td>{{ logg.name }}</td>
                        <td>{{ logg.type }}</td>
                        <td>{{ logg.warm }}</td>
                        <td>{{ logg.interv }}</td>
                        <td>{{ logg.time }}</td>
                        <td>{{ logg.notes }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: logg._id }}" class="btn btn-success">Uppdatera
                            </router-link>
                            <button @click.prevent="deleteLogg(logg._id)" class="btn btn-danger">Radera</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                Loggs: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Loggs = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteLogg(id){
                let apiURL = `http://localhost:4000/api/delete-logg/${id}`;
                let indexOfArrayItem = this.Loggs.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Loggs.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>