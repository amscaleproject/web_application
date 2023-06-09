import { Component } from '@angular/core';
import {WsService} from '../_services';

@Component({
  selector: 'app-pool-list',
  templateUrl: './pool-list.component.html',
  styleUrls: ['./pool-list.component.css']
})
export class PoolListComponent {
  pageTitle: string;
  helpContent: string = `    
    <div class="help-content">    
        <div class="detail-overlay-header">
            <h2>
                Pool Help Guide
            </h2>
        </div>
        <h3>
            Managing Pools
        </h3>
        <p>A Pool is a collection of physical servers known as Nodes that have similar physical
            resource characteristics. SDServers are created from a number of Nodes contained within an individual pool.
            The Nodes in a Pool must have:</p>
        <ol>
            <li>Identical amounts of physical RAM.</li>
            <li>Identical number of CPUs.</li>
            <li>
                Similar CPU characteristics. CompanyMove will operate at the level of the least
                common denominator CPU and recommends:
                <ol>
                    <li>Similar core count.</li>
                    <li>Similar clock speed.</li>
                </ol>
            </li>
            <li>Similar NIC configuration including same number of cards (to be used) and
                speeds.
            </li>
        </ol>
        <p>
            <span class="material-icons help-alert-info">info</span> 
            Warning:
            Nodes must have identical NIC configuration for each node import where network configurations are copied
            between nodes.
        </p>
        <h3>
            Pools Dashboard
        </h3>
        <p>An overview of all Pools may be accessed by clicking "Pools" in the left navigation
            pane. It will open a dashboard reviewing "All Pools".</p>
        <h4>
            All Pools
        </h4>
        <p>
            The dashboard for "All Pools" indicates:
        </p>
        <ul>
            <li>Pools: Number of Pools managed by this CompanyMove instance.</li>
            <li>SDServers: Number of SDServers that has been created by Nodes from any Pool.</li>
            <li>Nodes: Number of Nodes contained in all Pools.</li>
            <li>Nodes unassigned: Number of Nodes available to create additional SDServers with.
            </li>
        </ul>
        <p>The Pools list provides a multi-column sortable and searchable list of all configured
            Pools managed by CompanyMove. The search functionality allows an administrator to search for the name (or
            partial name) of any Pool.</p>
        <p>
            Sortable Columns include:
        </p>
        <ul>
            <li>Pool Name: User defined name of the Pool.</li>
            <li>Num. SDServers: Number of SDServers defined using the Pool.</li>
            <li>Num. Nodes: Number of Nodes imported into the Pool.</li>
            <li>Nodes Assigned: Number of total Nodes in the Pool assigned to SDServers.</li>
            <li>Nodes Unassigned: Number of total Nodes in the Pool that are available to assign
                to SDServers created from this Pool.
            </li>
            <li>Memory per Node: Amount of physical memory available per node in the Pool.</li>
            <li>Processors per Node: Number of logical cores available per node in the Pool.</li>
        </ul>        
        <p>
            For each of the Pools in the list, the administrator has the option to view the Pool
            Overview, Edit the Pool properties or Delete the Pool.
        </p>
        <h4>
            Create Pool
        </h4>
        <p>
            Begin the process of creating a new Pool by clicking the "Create Pool" link.
        </p>
        <h3>
            Create a Pool
        </h3>
        <p>
            You will be asked to input the following information in Step 1:
        </p>
        <ol>
            <li>
                Name: User friendly name to describe the Pool being created. It must be a minimum
                of 5 characters.
            </li>
            <li>Description (Optional): Description of the Pool for internal reference.</li>
            <li>
                Node Type: aws [Amazon Web Service EC2 baremetal Instances] or baremetal
                [privately managed baremetal servers].
            </li>
        </ol>
        <p>
            Click "Save" to create the Pool. You will be taken back to the overview page for the
            newly created Pool.
        </p>        
        <h3>
            Delete a Pool
        </h3>
        <p>Deleting a Pool will remove the Pool definition and all Nodes from CompanyMove
            management.</p>
        <p><span class="material-icons help-alert-info">info</span> Warning:
            Deleting a Pool is a destructive task. Once performed it may not be undone.</p>
        <p>
            In order to delete a Pool ensure all Nodes are unassigned.
        </p>
        <p>
            <span class="material-icons help-more-info">
                info
            </span>
            Information: If any Nodes are assigned to a SDServer, the UI will not allow the Pool to be deleted.</p>
        <p>
            Once the above criteria has been met, click "Delete Pool". Click "Confirm" to delete
            the Pool.
        </p>     
     </div>      
    `;

  constructor(public WsService: WsService) {
    this.pageTitle = 'All Pools'
  }

  ngOnInit(){
    console.log('init pool-list component');
    let getHelp = {"read":"help:home:en","correlator":2103708213};
    this.WsService.send(getHelp);
  }

}
